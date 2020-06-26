const Parser = require('rss-parser');
const {v4: uuidv4} = require('uuid');
const firebase = require('../database');
const moment = require('moment');

const getVergeArticles = async() => {
    let vergeParser = new Parser({
        customFields: {
            item: [
                'content'
            ],
        }
    });
    await vergeParser.parseURL('https://www.theverge.com/rss/index.xml', async (err, response) => {
        if (err) throw err;

        const getOldArticles = await firebase.firestore().collection('verge').get();
        const oldArticles = []
        getOldArticles.docs.map(article => oldArticles.push(article.data()));
        const feed = response.items;
        const batch = firebase.firestore().batch();

        /* Remove all documents older than 7 days from the db */
        await oldArticles.forEach(article =>{
            const today = moment();
            const articleAgeInDays = today.diff(article.pubDate, 'days');
            if(articleAgeInDays > 7){
                firebase.firestore().collection('verge').where('link', "==", article.link ).get().then(snapshot => {
                    const articleRef = firebase.firestore().collection('verge').doc(snapshot.docs[0].id)
                    batch.delete(articleRef);
                }).catch(err => {
                    console.log('Error getting documents', err);
                });
            }
        })

        /* Add the new articles */
        await feed.forEach(item => {
            let duplicate = false;
            oldArticles.forEach(article =>{
                if(article.link === item.link) duplicate = true;
            })
            if(duplicate) return;

            /* Get image source of first image in the content string */
            let str = item.content;
            const imgExists = str.indexOf('src="');
            if (imgExists > -1) {
                str = str.substr(imgExists + 5);
                str = str.substr(0, str.indexOf('"'));
            }
            const article = {
                id: uuidv4(),
                link: item.link,
                title: item.title,
                imageSrc: str,
                /*summary: item.content,*/
                pubDate: item.pubDate,
            }
            const articleRef = firebase.firestore().collection('verge').doc(uuidv4());
            batch.set(articleRef, article);
        })

        /* Execute all queries on db */
        batch.commit();
    })
}

module.exports = {
    getVergeArticles,
}
