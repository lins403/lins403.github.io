
import React, {useState} from "react"
import { Card, Image, Text, Link, Container, NavLink } from 'theme-ui'
import BooksData from './bookList.json'  // json数据有被缓存
import MoviesData from './movieList.json'  

const ReadingCard = ({listData})=>{
    if(listData.length===0){
        return (<Text>No Data.</Text>)
    }else
    return(
        listData.map((data, index) => {
                return <Card 
                            key={`content_item_${index}`}
                            sx={{
                            width: ['100%', '50%', '25%'],
                            }}>
                            <div style={{height: '250px', width:'100%'}}>
                                <Link href={data.cover_link} target={`_blank`}><Image src={data.cover} referrerPolicy ="never" style={{maxHeight: '95%'}}/></Link></div>
                            {/* <Text style={{ textAlign:'center', overflow:'hidden', textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{data.title}</Text> */}
                            <Text style={{transform: 'translateY(-10px)'}}>{data.time}</Text>
                        </Card> 
            })
        ) 
}



export const ReadingContainer = ({tabName})=>{
    const listData = tabName==="Books"? BooksData: MoviesData
    return (
        <Container style={{ maxWidth: `960px`, display: 'flex', flexWrap: 'wrap', textAlign:'center' }}>
            <ReadingCard listData={listData.lists.sort((a,b)=>b.order-a.order)} /> 
        </Container>
    )
}


export const ChangeTabs = ()=>{
    let [tabName,setTabName] = useState("Books")
    return(
        <div style={{"marginTop": "-5rem"}}>
            {/* {["Books","Movies"].map(item=>(
                    <Button onClick={()=>setTabName(item)} mr={4} key={item} variant='secondary'
                        className={`tab-button ${tabName===item? "tab-active":null}`}>{item}</Button>
                )
            )} */}
            {["Books","Movies"].map(item=>(
                <NavLink key={item} onClick={()=>setTabName(item)} p={3}
                    style={{'color':`${tabName===item? "rgb(97, 68, 174)":"inherit"}`, cursor: 'pointer'}}>
                    {item}
                </NavLink>
                )
            )}

            <ReadingContainer tabName={tabName}/>
        </div>
    )
}

export default ChangeTabs
