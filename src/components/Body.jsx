import React from 'react'
import { GetStarted } from '../style/styleHeader'
import { 
    AdvancedText,
    Advanced,
    ContainIllustration,
    TextIllustration,
    ContainMainText,
    ContainAdvanced,
    LinkShort,
    ContainLinksShorts 
    } from '../style/styleBody'
import illustration from '../../public/illustration-working.svg'
import advancedStatistics from '../advancedStatistics.json'
import FormUrlShort from './FormUrlShort'
const Body = ({shortsUrls,setShortsUrls}) => {
    return (
        <main>
            <ContainIllustration>
                <img src={illustration} alt="" />
                <TextIllustration>
                    <h1>More Than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights 
                        on how your links are performing.</p>
                    <GetStarted>Get Started</GetStarted>
                </TextIllustration>
            </ContainIllustration>
            <ContainMainText>
                <FormUrlShort shortsUrls={shortsUrls} setShortsUrls={setShortsUrls}/>
                <ContainLinksShorts>
                    {shortsUrls.map((item,i) => 
                        <LinkShort key={i}>
                            <div>
                                <p>{item.url}</p>
                            </div>
                            <div>
                                <b>{item.shortUrl}</b>
                                <GetStarted>Copy</GetStarted>
                            </div>
                        </LinkShort>
                    )}
                </ContainLinksShorts>
                <AdvancedText>
                    <h3>Advanced Statistics</h3>
                    <p>Track how your links are performing across the web with our 
                        advanced statistics dashboard.</p>
                </AdvancedText>
                <ContainAdvanced>
                    {advancedStatistics.map(({id,img,title,text}) => 
                        <Advanced key={id}>
                            <img src={img} alt="" />
                            <b>{title}</b>
                            <p>{text}</p>
                        </Advanced>
                    )}
                </ContainAdvanced>
            </ContainMainText>
        </main> 
    )
}

export default Body
