import React from 'react';

export const IndeterminateCheckbox = () => {
    const ref = React.useRef(null);
    const [indeterminate, setIndeterminate] = React.useState();

    React.useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <>
            <div className="pretty p-icon p-curve p-has-indeterminate">
                <input
                    ref={ref}
                    type="checkbox"
                    aria-checked={indeterminate ? 'mixed' : null}
                    onChange={React.useCallback(e => {
                        const { checked } = e.currentTarget;

                        setIndeterminate(false);
                        // prob should go full controlled here, but it's late
                        e.currentTarget.setAttribute('aria-checked', checked);
                    }, [])}
                />
                <div className="state">
                    <i className="icon mdi mdi-check"></i>
                    <label>Normal</label>
                </div>
                <div className="state p-is-indeterminate">
                    <i className="icon mdi mdi-minus"></i>
                    <label>Indeterminate</label>
                </div>
            </div>
            <button
                onClick={React.useCallback(() => {
                    setIndeterminate(p => !p);
                }, [])}>
                Apply
            </button>
        </>
    );
};
