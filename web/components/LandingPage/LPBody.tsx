import * as React from "react";

export interface ILPBodyProps {}

export default function LPBody(props: ILPBodyProps) {
  return (
    <section>
      <div className="hero min-h-screen" data-theme="night">
        <div className="hero-content flex-col lg:flex-row-reverse lg:mw-[1440px]">
          <div className="stack">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 1</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
