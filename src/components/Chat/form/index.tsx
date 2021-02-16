import React, { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react";
import { ReactComponent as Submit } from "./icons/submit.svg";
import { ReactComponent as Smile } from "./icons/smile.svg";
import { ReactComponent as File } from "./icons/file.svg";
import { ReactComponent as Bold } from "./icons/bold.svg";
import { ReactComponent as Italic } from "./icons/italic.svg";
import { ReactComponent as Strikethrough } from "./icons/strikethrough.svg";
import { ReactComponent as Code } from "./icons/code.svg";
import { ReactComponent as Link } from "./icons/link.svg";

import "./style.sass";

interface IProps {
  submit: MouseEventHandler<SVGSVGElement>;
  change: ChangeEventHandler<HTMLTextAreaElement>;
  activeSubmit: Boolean;
}

const Form: React.FC<IProps> = ({submit, change, activeSubmit}) => {

  const [focus, setFocus] = useState(false);

  const formRef = useRef();

  return (
    <div className="form-message">
      <textarea onFocus={() => setFocus(!focus)} onBlur={() => setFocus(!focus)} onChange={change} placeholder="Enter message" name="" id=""></textarea>
      <div className={`form-options ${focus ? `active` : ``}`}>
        <div className="form-options_left">
          <button>
            <Bold fill={`${focus ? `#5e5e5e` : `#00000`}`} fillOpacity={`${focus ? `0.7` : `0.1`}`} />
          </button>
          <button>
            <Italic fill={`${focus ? `#5e5e5e` : `#00000`}`} fillOpacity={`${focus ? `0.7` : `0.1`}`} />
          </button>
          <button>
            <Strikethrough fill={`${focus ? `#5e5e5e` : `#00000`}`} fillOpacity={`${focus ? `0.7` : `0.1`}`} />
          </button>
          <button>
            <Code fill={`${focus ? `#5e5e5e` : `#00000`}`} fillOpacity={`${focus ? `0.7` : `0.1`}`} />
          </button>
          <button>
            <Link fill={`${focus ? `#5e5e5e` : `#00000`}`} fillOpacity={`${focus ? `0.7` : `0.1`}`} />
          </button>
        </div>
        <div className="form-options_right">
          <button>
            <Smile />
          </button>
          <button>
            <File />
          </button>
          <button className={`${activeSubmit ? `activeSubmit` : ``}`}>
            <Submit fill={`${activeSubmit ? `#ffffff` : `#00000`}`} fillOpacity={`${activeSubmit ? `1` : `0.1`}`} onClick={submit} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
