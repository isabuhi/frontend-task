import { Avatar, Typography } from "@material-tailwind/react";

export function AvatarWithText() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div>
                    <Typography color={'black'} variant="h6">Tania Andrew</Typography>
                </div>
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"/>
            </div>
        </div>
    );
}