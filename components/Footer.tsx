import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-row">
            <div className="flex-1 flex justify-center my-audited py-4">
                <span className="font-semibold text-m">Audited by</span>
                <img src="/assets/icons/audited1.png" style={{maxHeight: 20}} alt="" />
                <img src="/assets/icons/audited2.png" style={{maxHeight: 20}} alt="" />
            </div>
            <div className="flex-1 flex justify-center my-item py-4">
                <img src="/assets/icons/git.png" alt="" width={35} />
                <img src="/assets/icons/twiter.png" alt="" width={35} />
                <img src="/assets/icons/m.png" alt="" width={35} />
                <img src="/assets/icons/turtle.png" alt="" width={35} />
                <img src="/assets/icons/tele.png" alt="" width={35} />
            </div>

            <style jsx>{`
                .my-item > *{
                    margin: 0 5px;
                }
                .my-audited > *{
                    margin: 0 15px;
                }
            `}</style>
        </div>
    );
}

export default Footer;
