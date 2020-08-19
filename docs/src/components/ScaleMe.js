import React from 'react';

export const ScaleMe = () => {
    const [size, setSize] = React.useState(14);

    return (
        <>
            <div className="pretty p-default" style={{ fontSize: size }}>
                <input type="checkbox" />
                <div className="state">
                    <label>{size}px</label>
                </div>
            </div>
            <br />
            <input
                type="range"
                value={size}
                min={8}
                max={48}
                onChange={React.useCallback(e => {
                    setSize(parseInt(e.currentTarget.value));
                }, [])}
            />
            <button type="reset" onClick={React.useCallback(() => setSize(14), [])}>
                Reset
            </button>
        </>
    );
};
