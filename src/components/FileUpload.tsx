import React, { useState } from 'react';

const FileUpload: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles([...files, ...Array.from(event.target.files)]);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-center mb-4">Ваш(-а) резюме</h1>
                <p className="text-center text-gray-600 mb-6">Что бы получить данные про вас</p>

                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
                    <p className="mb-2 text-gray-500">Select a file or drag and drop here</p>
                    <p className="mb-2 text-gray-400">JPG, PNG or PDF, file size no more than 10MB</p>
                    <label className="cursor-pointer inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
                        SELECT FILE
                        <input
                            type="file"
                            multiple
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>

                {files.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-medium mb-2">File added</h2>
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <img
                                        src="/path/to/icon.png" // Replace with the path to your icon
                                        alt="file icon"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span className="text-blue-500">{file.name}</span>
                                </div>
                                <span className="text-gray-500">{(file.size / 1024 / 1024).toFixed(1)}MB</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-end mt-6">
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2">Cancel</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Upload</button>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
