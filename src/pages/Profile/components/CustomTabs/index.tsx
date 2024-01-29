import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card, CardBody, Typography
} from "@material-tailwind/react";
import ProfileService from "../../../../services/profile.service";
import {useEffect, useState} from "react";
import DetailsTable from "../../../Home/components/DetailsTable";
import classes from "./style.module.scss"



const profileLabelMap: any = {
    id: "ID",
    username: "Isdifadeci adi",
    firstName: "Ad",
    lastName: "Soyad",
    fatherName: "Ata adi",
    birthPlace: "Dogum yeri",
    birthDate: "Dogum tarixi",
    gender: "Cinsi",
    email: "Email",
    educationType: "Tehsil"
}

const eductionLabelMap: any = {
    id: 0,
    certificate: "string",
    date: "2024-01-29T22:25:16.265Z",
    serialNumber: "string"
}
export default ()=>{

    const [currentData, setCurrentData] = useState<any>(null)
    const [currentLabel, setCurrentLabel] = useState<any>(null)
    const { refetch: refetchProfile} = ProfileService().useGetProfile()
    const { refetch: refetchEducation} = ProfileService().useGetEducation()


    
    const data = [
        {
            label: "Şəxsi məlumatlar",
            value: "profile",
            refetch: ()=>{
                setCurrentData(null)
                setCurrentLabel(profileLabelMap)
                refetchProfile().then((data)=>{
                    setCurrentData(data.data.data)
                })
            }
        },
        {
            label: "Təhsil məlumatları",
            value: "education",
            refetch: ()=>{
                setCurrentData(null)
                setCurrentLabel(eductionLabelMap)
                refetchEducation().then((data)=>{
                    setCurrentData(data.data.data)
                })
            }
        },
    ];


    useEffect(() => {
        data[0].refetch()
    }, []);



    
    return (
        <Tabs id="custom-animation" value="profile">
            <TabsHeader className={"w-2/6"}>
                {data.map(({ label,refetch, value }, index) => (
                    <Tab className={"border-b-8"} onClick={()=>{refetch()}}  key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}

            >
                <Card className={`w-full p-4 overflow-y-scroll ${classes.tabBody}`}>
                    <CardBody className={"shadow-2xl w-6/12"}>
                        <DetailsTable listData={currentData} listMap={currentLabel} header={"Ümumi məlumatlar"}/>
                    </CardBody>
                </Card>
            </TabsBody>
        </Tabs>
    );
}