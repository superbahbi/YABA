import * as React from "react";
import LPToast from "./LPToast";

export interface ILPBodyProps {}

export default function LPBody(props: ILPBodyProps) {
  return (
    <section
      className="flex justify-center min-h-screen pt-12"
      data-theme="night"
    >
      <div className="flex w-full md:max-w-screen-xl justify-center">
        <div className="toast toast-top toast-end relative grid">
          <LPToast textContent="Hey sweetie! How's the first month of college going?" />
          <LPToast
            justifySelfEnd
            textContent="Hi mom!! It's been so great! Jessica and I met the president
                  of the curling team!"
          />
          <LPToast
            justifySelfEnd
            textContent="Oh.. But I'm having a bit of trouble with something..."
          />
          <LPToast textContent="That's fantabulous honey! I'm so proud of you! But, what's wrong?" />
          <LPToast
            justifySelfEnd
            textContent="I'm running out of money too quickly.. Haha.. College life am I right?"
          />
          <LPToast textContent="Bruh. Do you remember how we switched to Groomify for Buddy's grooming appointments? " />
          <LPToast
            justifySelfEnd
            textContent="Mmhmm.. Yeah. They had such a great website, and their service was even better. But what's your point?"
          />
          <LPToast textContent="Groomify's developers just released a new application - an amazing budgeting application!" />
          <LPToast
            justifySelfEnd
            textContent="Okay perfect! I think Jessica mentioned this to me, I'm pretty sure it's called YABA. Gonna check it out now, love ya mom!!"
          />
        </div>
      </div>
    </section>
  );
}
