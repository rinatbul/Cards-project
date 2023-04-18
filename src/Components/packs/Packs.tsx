import React from 'react';
import s from './Packs.module.css'

const Packs = () => {
    return (
        <div className={s.wrapper}>
            <div>Name</div>
            <div>cardsCount</div>
            <div>updated</div>
            <div>url</div>
            <div>
                <button>
                    add
                </button>
            </div>

        </div>
    );
};

export default Packs;