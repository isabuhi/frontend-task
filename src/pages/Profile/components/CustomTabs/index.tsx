import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card, CardBody
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
            refetch: ()=>{
                refetchProfile().then((data)=>{
                    setCurrentData(data.data.data)
                })
            }
        },
        {
            label: "Təhsil məlumatları",
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
        <Tabs id="custom-animation" value="html">
            <TabsHeader className={"w-2/6"}>
                {data.map(({ label,refetch }, index) => (
                    <Tab onClick={()=>{refetch()}}  key={index} value={index}>
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
                <DetailsTable listData={currentData} listMap={labelMap}/>
            </TabsBody>
        </Tabs>
    );
}