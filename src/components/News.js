import React, {Component} from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "new-york-magazine",
                "name": "New York Magazine"
            },
            "author": "Jennifer Zhan",
            "title": "India’s Ambani Wedding: All the Celeb Guests and Performers",
            "description": "Rema performed ‘Calm Down’ for a star-studded crowd at the Ambani wedding in India. Here, a long list of other celebs who have been part of the opulent festivities so far.",
            "url": "https://www.vulture.com/article/ambani-wedding-india-celebrity-performers-guest-details.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/e09/2c7/ca6f23aca8e2c95e4de5ffa7fcdf7e5562-ambanimerchant.1x.rsocial.w1200.jpg",
            "publishedAt": "2024-07-13T06:42:13Z",
            "content": "Is this summers hottest music festival a wedding? On July 12, Anant Ambani the youngest son of billionaire Mukesh Ambani, who is the richest man in Asia  exchanged vows with pharmaceutical heiress Ra… [+2406 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Emma Hinchliffe, Paige McGlauflin",
            "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
            "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
            "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
            "publishedAt": "2022-06-01T13:22:34Z",
            "content": "Skip to Content"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "Ananth Krishnan",
            "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
            "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
            "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
            "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
            "publishedAt": "2021-07-22T15:47:01Z",
            "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
        },
        {
            "source": {
                "id": "rte",
                "name": "RTE"
            },
            "author": "RTÉ News",
            "title": "UK continues with reopening plan despite concerns",
            "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
            "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
            "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
            "publishedAt": "2021-05-15T09:33:48Z",
            "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Rajat Pandit",
            "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
            "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
            "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T08:29:00Z",
            "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n\u003Cul\u003E\u003Cli\u003ENews\u003C/li\u003E\r\n\u003Cli\u003EIndia News\u003C/li\u003E\r\n\u003Cli\u003EArmy explores procurement of 350 light tanks for mou… [+58 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
            "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
            "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T05:44:49Z",
            "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
            "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
            "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T05:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Even record death toll may hide extent of India’s Covid crisis",
            "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
            "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T04:41:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Dipak K Dash",
            "title": "Government to provide 5 kg free food grains to poor for May & June",
            "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
            "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T04:23:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
            "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
            "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T03:54:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
            "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
            "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-22T16:20:06Z",
            "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
            "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
            "publishedAt": "2020-04-25T03:00:09Z",
            "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
        }
    ]
    constructor() {
        super();
        this.state={
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className="container my-3">
            <h2>
                News Monkey - Top Headlines
            </h2>

            <div className="row">
                {this.state.articles.map((element)=>{
                    return (
                        <div className="col-md-4">
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)}
                                      imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    )
                })}

            </div>
      </div>
    );
  }
}

export default News;