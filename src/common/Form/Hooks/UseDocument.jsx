import { useState } from "react";
const initial_state = {
    main_category: null,
    secondary_category: null,
}

export function useDocument() {
    const [document, setDocument] = useState(initial_state)
    const [showTable, setShowTable] = useState(false);
    const [error, setError] = useState(initial_state);
    const handleChangeDropDown = (e, name, title) => {
        if (name === 'main_category') {
            setDocument(initial_state);
        }
        setDocument(prevState => ({
            ...prevState,
            [name]: { label: e.label, value: e.value, title: title },
        }))
    }
    const handleChangeInput = (value, name, title)=> {
        setDocument(prevState => ({
            ...prevState,
            [name]: {label:'other' , value:0 , text : value, title: title },
        }))
    }
    const handleDocument = (document_copy) => {
        setDocument((prevState) => ({ ...prevState, ...document_copy }))
    }

    const getProperties = (arr) => {
        let copy_process = {
            main_category: null,
            secondary_category: null
        }
        let result = (function convertNodeToObject(loopArray) {
            loopArray.forEach(item => {
                copy_process[item.slug] = null
                if (item.children.length > 0) {
                    convertNodeToObject(item.children)
                }
            })
            return copy_process
        })(arr);
        return result
    }

    const filterDocument = (e, processTypes) => {
        e.preventDefault();
        if (document.main_category === null) {
            setError((prevState) => (
                { ...prevState, main_category: true }
            ))
        }
        else if (document.secondary_category === null) {
            setError((prevState) => (
                { ...prevState, secondary_category: true }
            ))
        } else {
            let obj = getProperties(processTypes);
            for (const item in document) {
                if (!obj.hasOwnProperty(item)) {
                    delete document[item]
                }
            }
            setDocument(document);
            setShowTable(true)
        }
    }
    return { document, handleChangeDropDown , handleChangeInput, handleDocument, filterDocument, showTable, error };
}