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

export default ()=>{

    const [currentData, setCurrentData] = useState<any>()
    const { refetch: refetchProfile} = ProfileService().useGetProfile()
    const { refetch: refetchEducation} = ProfileService().useGetEducation()


    
    const data = [
        {
            label: "Şəxsi məlumatlar",
            value: "profile",
            refetch: ()=>{
                refetchProfile().then((data)=>{
                    setCurrentData(data.data.data)
                })
            }
        },
        {
            label: "Təhsil məlumatları",
            value: "education",
            refetch: ()=>{
                refetchEducation().then((data)=>{
                    setCurrentData(data.data.data)
                })
            }
        },
    ];


    useEffect(() => {
        data[0].refetch()
    }, []);


    const labelMap: any = {
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
    
    return (
        <Tabs id="custom-animation" value="profile"
            className={"p-5"}
        >
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
                <Card className={"w-full p-4"}>
                    <CardBody className={"shadow-2xl w-6/12"}>
                        <DetailsTable listData={currentData} listMap={labelMap} header={"Ümumi məlumatlar"}/>
                    </CardBody>
                </Card>
            </TabsBody>
        </Tabs>
    );
}