import {Card, Typography, ListItem, ListItemPrefix, List, Avatar} from "@material-tailwind/react";

interface Props {
    listData?: any
    listMap?: any
    header?: string
}



export default ({listData, listMap, header}: Props)=>{
    return (
        listData? <Card className="w-96 bg-opacity-80 backdrop-blur-lg backdrop-saturate-200 shadow-2xl">
            <List>
                {
                    header && <Typography variant={"h6"}>
                        Ümumi məlumatlar
                    </Typography>
                }
                {Object.entries(listData).map(([key, value], index)=>{
                    return (
                        <ListItem key={index}>
                            <div>
                                <Typography className={"font-bold text-xs"} color="blue-gray">
                                    {listMap[key]}
                                </Typography>
                                <Typography color="gray" className="font-normal text-xs">
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