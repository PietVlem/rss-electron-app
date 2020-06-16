let Parser = require('rss-parser');
const {v4: uuidv4} = require('uuid');
const firebase = require('../database');

/*const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";*/

const getVrtArticles = async () => {
    let vrtParser = new Parser({
        customFields: {
            item: [
                'summary',
                ['link', 'linkArray', {keepArray: true}]
            ],
        }
    });
    await vrtParser.parseURL('https://www.vrt.be/vrtnws/nl.rss.headlines.xml', async (err, response) => {
        if (err) throw err;

        const getOldArticles = await firebase.firestore().collection('vrt').get();
        const oldArticles = []
        getOldArticles.docs.map(article => oldArticles.push(article.data()));

        const uniqueFeed = Array.from(new Set(response.items.map(a => a.link)))
            .map(link => {
                return response.items.find(a => a.link === link)
            })

        for (const item of uniqueFeed) {
            let duplicate = false;
            oldArticles.forEach(article =>{
                if(article.link === item.link) duplicate = true;
            })
            if(duplicate) continue;
            const article = {
                id: uuidv4(),
                link: item.link,
                title: item.title,
                imageSrc: item.linkArray[2].$.href,
                summary: item.summary,
                pubDate: item.pubDate,
            }
            await firebase.firestore().collection('vrt').add(article);
        }
    })
}

module.exports = {
    getVrtArticles,
}