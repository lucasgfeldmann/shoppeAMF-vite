import EditSvg from "../../../assets/icons/edit.svg";


const EditIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={EditSvg} alt="Edit" {...props} />
    );
}

export default EditIcon;