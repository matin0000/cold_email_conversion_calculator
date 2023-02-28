import { Card, Divider } from "antd";
import { motion } from "framer-motion";
import { Fragment } from "react";
import Rates from "./Rates";

const MCard = motion(Card);

const RateHolder = (props) => {
  return (
    <MCard
      bordered
      hoverable
      style={{ maxWidth: "550px", width: "100%", marginTop: "10px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="rateHolder">
        {props.data?.length > 0 &&
          props.data?.map((doc, i) => {
            return (
              <Fragment>
                {i !== 0 && <Divider style={{ margin: "5px 0" }} />}
                <Rates doc={doc} key={i} />
              </Fragment>
            );
          })}
      </div>
    </MCard>
  );
};

export default RateHolder;
