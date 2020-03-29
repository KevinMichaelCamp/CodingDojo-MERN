import { useState } from 'react';

export default (inititialList = []) => {
    const [list, setList] = useState(inititialList);

    function add(str) {
        setList([...list, str]);
    }

    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
        console.log(list);
    }

    return {
        list,
        add,
        remove
    };
}