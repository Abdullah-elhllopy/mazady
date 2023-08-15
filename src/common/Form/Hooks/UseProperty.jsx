import { useState } from "react";
function searchTree(arr, target, children) {
    for (let obj of arr) {
        if (obj.id === target) {
            obj.children = children;
            return true;
        }
        if (obj.children.length > 0) {
            const childUpdated = searchTree(obj.children, target, children);
            if (childUpdated) {
                return true;
            }
        }
    }
    return false;
}
const mapToLabelValue = (arr, id, title, parent) => {
    let new_arr = arr.map(item => (
        {
            value: item[id],
            label: item[title],
            parent: item[parent]
        }
    ))
    new_arr.push({ label: 'other', value: 0 })
    return new_arr
}

export function UseProperty(handleDocument) {
    let [processTypes, setProcessTypes] = useState([]);
    const handleSetProcessTypes = async (id) => {
        const res = await fetch(`https://staging.mazaady.com/api/v1/properties?cat=${id}`, {
            headers: {
                'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16',
            },
        });
        const data = await res.json();
        if (Array.isArray(data.data)) {
            let document_copy = {};
            let properties = data.data.map(property => {
                document_copy[property.slug] = null;
                return (
                    {
                        title: property.name,
                        id: property.id,
                        slug: property.slug,
                        options: mapToLabelValue(property.options, 'id', 'name', 'parent'),
                        children: []
                    }
                )
            })        
            setProcessTypes(properties)
            handleDocument(document_copy)
        }
    }
    const handleChangePropertyDropdown = async (id, parent) => {
        const res = await fetch(`https://staging.mazaady.com/api/v1/get-options-child/${id}`, {
            headers: {
                'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16',
            },
        });
        const data = await res.json();
        if (Array.isArray(data.data)) {
            let document_copy = {};
            let children = data.data.map(property => {
                document_copy[property.slug] = null;
                return (
                    {
                        title: property.name,
                        id: property.id,
                        slug: property.slug,
                        options: mapToLabelValue(property.options, 'id', 'name', 'parent'),
                        children: []
                    }
                )
            })
            let copy_arr = [...processTypes]
            const updated = searchTree(copy_arr, parent, children)
            if (updated) {
                setProcessTypes(copy_arr);
                handleDocument(document_copy)
            } else {

            }
        }
    }


    return { processTypes, handleSetProcessTypes, handleChangePropertyDropdown };
}