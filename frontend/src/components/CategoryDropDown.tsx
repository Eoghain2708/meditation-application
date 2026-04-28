import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../api/categories/categories";

export default function CategoryDropDown() {
    const [ categories, setCategories ] = useState<string[]>([]);
    const [ searchParams, setSearchParams ] = useSearchParams();

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const params = new URLSearchParams(searchParams);
        const value = e.target.value;
        if (value) {
            params.set("category", value);
        } else {
            params.delete("category");
        }

        setSearchParams(params);
    }

    return (
        <select 
        value={searchParams.get("category") || ""} onChange={handleChange}
        className="text-blue-400">
            <option key="all" value="">all</option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        );
}