import Dropdown from "../Dropdown/Dropdown";
export const renderProperties = (arr, handleChangeDropDown, handleChangePropertyDropdown, document) => {
    return (
        arr.map((item) => {
            return (
                <>
                    <div key={item.id}>
                        <Dropdown
                            options={item.options}
                            label={item.title}
                            name={item.slug}
                            value={document[item.slug]}
                            placeholder={`please Select ${item.title}`}
                            onChange={(e) => {
                                handleChangeDropDown(e, `${item.slug}`, `${item.title}`);
                                handleChangePropertyDropdown(e.value, e.parent);
                            }}
                        />
                        {
                            document[item.slug] ?
                                document[item.slug].value === 0 ?
                                    <input type="text" id="small-input"
                                        className="mt-1 border-solid border-2 border-ccc py-1 px-2 w-full focus:border-ccc focus:outline-none"
                                    /> : null : null
                        }
                    </div>
                    {
                        item.children ? renderProperties(item.children, handleChangeDropDown, handleChangePropertyDropdown, document) : null
                    }
                </>
            )
        })
    )
}