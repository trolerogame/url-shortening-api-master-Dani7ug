import React,{useRef,useState} from 'react'
import { GetStarted } from '../style/styleHeader'
import { Form } from '../style/styleFormUrlShort'
const FormUrlShort = ({shortsUrls,setShortsUrls}) => {
    const urlValue = useRef(null)
    const [empty,setEmpty] = useState(false)
    const urlPost = async e => {
        e.preventDefault()
        const url = urlValue.current.value
        if(!url) return setEmpty(true) 
        try{
            const shortUrlPromise = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            const shortUrl = (await shortUrlPromise.json()).result.full_short_link
            setShortsUrls([...shortsUrls,{url,shortUrl}])
            setEmpty(false)
        }catch{
            setEmpty(true) 
        }
        urlValue.current.value = ''
    }
    return ( 
        <Form empty={empty} onSubmit={urlPost}>
            <div>
                <input ref={urlValue} type="text" placeholder="Shorten a link here..." />
                {empty && <p>Please add a link</p>}
            </div>
            <GetStarted>Shorten It!</GetStarted>
        </Form>
    )
}

export default FormUrlShort
