import {Card, Typography, ListItem, ListItemPrefix, List, Avatar} from "@material-tailwind/react";

interface Props {
    listData?: any
    listMap?: any
}



export default ({listData, listMap}: Props)=>{
    return (
        listData? <Card className="w-96 bg-opacity-80 backdrop-blur-lg backdrop-saturate-200 h-full">
            <List>
                {Object.entries(listData).map(([key, value], index)=>{
                    return (
                        <ListItem key={index}>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    {listMap[key]}
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    {value}
                                </Typography>
                            </div>
                        </ListItem>
                    )
                })}
            </List>
        </Card>: null
    )
}