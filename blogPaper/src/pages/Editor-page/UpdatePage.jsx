import { useParams } from 'react-router-dom';
import TextEditor from "../../components/TextEditor/editor/TextEditor";

const UpdatePage = () => {
    const { id } = useParams(); // Cambiado de postId a id
    return (
        <div>
            <h1>Update Post</h1>
            <TextEditor postId={id} /> {/* Cambiado de postId a id */}
        </div>
    );
};

export default UpdatePage;