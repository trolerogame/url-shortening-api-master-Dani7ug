import React,{useRef} from 'react'
import { GetStarted } from '../style/styleHeader'
import { Form } from '../style/styleFormUrlShort'
const FormUrlShort = ({shortsUrls,setShortsUrls}) => {
    const urlValue = useRef(null)
    const urlPost = async e => {
        e.preventDefault()
        const url = urlValue.current.value
        const shortUrlPromise = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        const shortUrl = (await shortUrlPromise.json()).result.full_short_link
        setShortsUrls([...shortsUrls,{url,shortUrl}])
        urlValue.current.value = ''
    }

    return ( 
        <Form onSubmit={urlPost}>
            <input ref={urlValue} type="text" placeholder="Shorten a link here..." />
            <GetStarted>Shorten It!</GetStarted>
        </Form>
    )
}

export default FormUrlShort
