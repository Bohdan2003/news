import './newsList.scss';

export default ({news, activeFilter = "all"}) => {

    const setClassName = (classType) => {
        switch(classType){
            case 'photo':
                return 'news-with-photo';
            case 'breaking':
                return 'breaking-news';
            case 'video':
                return 'news-with-video';
            case 'online':
                return 'online-news';
            case 'exclusive':
                return 'exclusive-news';
            default:
                return '';
        }
    }
    
    return (
        <ul className="news-list__items">
            {
                news.filter(item => {
                    if(activeFilter==='all'){
                        return item;
                    } else if(item.type === activeFilter) {
                        return item;
                    }
                }).map(({classType, descr, time}, i) => 
                    <li className={`news-list__item ${setClassName(classType)}`} 
                        key={i}
                    >                           
                        <a 
                            className="news-list__item-descr" 
                            href="#"
                            onClick={e=>{
                                e.preventDefault();
                            }}
                        >
                            <span className="news-list__item-time">
                                {time}
                            </span>
                            {descr}
                        </a>
                    </li>
                )
            }
        </ul>
    )
}