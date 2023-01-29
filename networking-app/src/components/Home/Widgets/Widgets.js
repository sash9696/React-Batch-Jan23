import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const newsArray = [
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
    { headline: 'Australian Open 2023 Final', link: 'https://sports.ndtv.com/australian-open-2023/australian-open-2023-final-novak-djokovic-vs-stefanos-tsitsipas-live-updates-3733052' },
]

function Widgets() {


    const news = (headlines, link) => (
        <a href={link} style={{ textDecoration: 'none' }} target='_blank'>
            <div className='widgets'>
                <div className='widgets_left'>
                    <FiberManualRecordIcon style={{
                        height: 10, width: 10
                    }} />
                </div>
                <div className='widgets_right'>
                    <p>{headlines}</p>
                </div>
            </div>
        </a>
    )


    return (
        <div className='widget_container'>
            <div className='widgets_header'>
                <h2>Latest News</h2>
                <InfoIcon />
            </div>

            {newsArray.map((value, index) => (
                <div key={index} className='single_news'>
                    <h1>{news(value.headline, value.link)}</h1>
                </div>
            ))}
        </div>
    )
}

export default Widgets