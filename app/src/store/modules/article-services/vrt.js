import Parser from "rss-parser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

async function getVrtFeed(){
    /*vrtNieuws*/
    let vrtParser = new Parser({
        customFields: {
            item: [
                'summary',
                ['link', 'linkArray', {keepArray: true}]
            ],
        }
    });
    let articles = [];
    await vrtParser.parseURL(CORS_PROXY + 'https://www.vrt.be/vrtnws/nl.rss.headlines.xml', (err, feed) => {
        if (err) throw err;
        feed.items.forEach(item => {
            let duplicate = false;
            articles.forEach(article =>{
                if(article.link === item.link) duplicate = true;
            })
            if(duplicate) return;
            const article = {
                link: item.link,
                title: item.title,
                imageSrc: item.linkArray[2].$.href,
                summary: item.summary,
                pubDate: item.pubDate,
                feed: 'vrt',
            }
            articles.push(article);
        })
        articles.sort(function(a, b) {
            return (a.pubDate > b.pubDate) ? -1 : ((a.pubDate < b.pubDate) ? 1 : 0);
        });
    })
    return articles;
}

export default {
    getVrtFeed
}

