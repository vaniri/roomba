import React, { useRef } from 'react';

const UploadForm = ({ setInput }) => {

    const ref = useRef(null);

    const handleUpload = e => {
        e.preventDefault();
        let fr = new FileReader();
        fr.readAsText(ref.current.files[0]);
        fr.onload = () => {
            setInput(JSON.parse(fr.result));
        };
    }

return (
    <div>
        <form
            className="upload-file-form"
        >
            <label className="btn">
            <input
                ref={ref}
                type="file"
                name="file"
                onChange={handleUpload}
                placeholder="upload file"
            />
                UPLOAD FILE
            </label>
        </form>
    </div>
)
}

export default UploadForm;