import { getTime, getDay, getMonth, transformMonth } from '../newsEditorial/NewsEditorial';

import NewsRegionsList from './NewsRegionsList';

export default ({name, news}) => {
    let renderArr = [],
        indexArr = [];
    

    let arrOfRange = [];
    const renderContent = (news) => {
        let prevValue;

        for(let i = 0; i < news.length; i++){
            if(i == 0){
                indexArr.push(0);
                prevValue = getDay(news[1].time).replace(/0/g,'');
                renderArr.push(prevValue);
            }
            if(prevValue !== getDay(news[i].time).replace(/0/g,'')){
                indexArr.push(i);
                indexArr.push(i);
                renderArr.push(getDay(news[i].time).replace(/0/g,''));
                prevValue = getDay(news[i].time).replace(/0/g,'');
            }
            if(i === news.length-1){
                indexArr.push(news.length);
            }
        }

        let j = 0;
        for(let i = 1; i < indexArr.length;i+=2){
            arrOfRange[j] = [indexArr[i-1], indexArr[i]];
            j++;
        }
    };
   
    renderContent(news); 
    
    return (
        <div className="news-regions__item">
            <div className="news-regions__item-title">
                {name}
            </div>
            {
                arrOfRange.map((range, i) => <NewsRegionsList key={i} data={news[range[0]].time} news={news.slice(...range)}/>                 
                )
            }
            <button className="news-regions__btn">Більше новин</button>
        </div> 
    )  
}