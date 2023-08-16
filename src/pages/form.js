import Dropdown from '@/common/Dropdown/Dropdown';
import { useDocument } from '@/common/Form/Hooks/UseDocument';
import { UseProperty } from '@/common/Form/Hooks/UseProperty';
import { renderProperties } from '@/common/Form/RenderProperties';
import React, { useState, useEffect, useMemo } from 'react';
const Form = ({ categories }) => {
    let [subCategories, setSubCategories] = useState([]);
    const [copDocState, setCopyDoc] = useState(false);
    const { document, handleChangeDropDown, handleChangeInput, handleDocument, filterDocument, showTable, error } = useDocument();
    const { processTypes, handleSetProcessTypes, handleChangePropertyDropdown } = UseProperty(handleDocument)
    const handleSetSubCategory = (data) => {
        setSubCategories(data)
    }
    const copy_doc = useMemo(()=>{
        return document
    }, [showTable, copDocState])
    
    return (
        <div className="form_container  pt-8   ">
            <form className="border-l border-ccc pl-2 flex flex-col gap-2" noValidate onSubmit={(e) => {
                filterDocument(e, processTypes)
                setCopyDoc(!copDocState)
            }
            } >
                <Dropdown
                    options={categories}
                    label={'Main Category'}
                    name={'main_category'}
                    error={error.main_category}
                    isRequired={true}
                    value={document.main_category}
                    placeholder={'please select category'}
                    onChange={(e) => {
                        handleChangeDropDown(e, 'main_category', 'Main Category')
                        handleSetSubCategory(e.children)
                    }}
                />
                <Dropdown
                    options={subCategories}
                    label={'Secondary Category'}
                    name={'secondary_category'}
                    error={error.secondary_category}
                    isRequired={true}
                    value={document.secondary_category}
                    placeholder={'please select secondary category'}
                    onChange={(e) => {
                        handleChangeDropDown(e, 'secondary_category', 'Secondary Category')
                        handleSetProcessTypes(e.value)
                    }}
                />
                {
                    document.secondary_category ? <>
                        <div className='mt-3 flex flex-col gap-2'>
                            {renderProperties(processTypes, handleChangeDropDown, handleChangeInput, handleChangePropertyDropdown, document)}
                        </div>
                    </> : null
                }
                <div className='flex justify-center'>
                    <button type='submit' className="bg-blue-500 w-44 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                </div>
            </form>
            {
                showTable ?
                    <div className="relative overflow-x-auto mt-5">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {
                                        Object.keys(copy_doc).map((key, index) => {
                                            let col = copy_doc[key]
                                            if (col !== null) {
                                                return (
                                                    <th key={`col_${index}`} scope="col" className="px-6 py-3">
                                                        {col.title}
                                                    </th>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {
                                        Object.keys(copy_doc).map((key, index) => {
                                            let row = copy_doc[key]
                                            if (row !== null) {
                                                return (
                                                    <td key={`row${index}`} className="px-6 py-4">
                                                        {row.label === 'other' ? row.text ? row.text : 'other' : row.label}
                                                    </td>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div> : null
            }
        </div>
    );
}

export default Form

export const getStaticProps = async () => {
    const res = await fetch("https://staging.mazaady.com/api/v1/get_all_cats", {
        headers: {
            'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16',
        },
    });
    const data = await res.json();
    if (Array.isArray(data.data.categories)) {
        let categories = data.data.categories.map(category => (
            {
                label: category.name, value: category.id,
                children: category.children.map(child => ({ label: child.name, value: child.id }))
            }
        ))
        return {
            props: {
                categories: categories,
            },
        };
    } else {
        return {
            props: {
                categories: [],
            },
        };
    }

};
