const Parser = require('rss-parser');
const {v4: uuidv4} = require('uuid');
const firebase = require('../database');

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
        for (const item of feed) {
            let duplicate = false;
            oldArticles.forEach(article =>{
                if(article.link === item.link) duplicate = true;
            })
            if(duplicate) continue;

            /* Get image source of first image in the content string */
            var str = item.content;
            var imgExists = str.indexOf('src="');
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
            /*console.log(article);*/
            await firebase.firestore().collection('verge').add(article);
        }
    })
}

module.exports = {
    getVergeArticles,
}
