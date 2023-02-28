import { useState, useEffect } from "react";
import { Card, InputNumber, Typography } from "antd";
import { Fragment } from "react";
import RateHolder from "./RateHolder";
import { motion } from "framer-motion";
import Replies from "./Replies";
const MCard = motion(Card);

const EmailCard = (props) => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState("");
  const [reply, setReply] = useState("");
  const [rData, setRData] = useState(null);
  const rates = [
    0.1, 0.5, 0.8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25,
  ];
  const examples = [100, 500, 1000, 10000, 100000];

  const calculateConversion = (conversionRate, emailCount) => {
    let conversionDecimal = conversionRate / 100;
    let conversions = emailCount * conversionDecimal;
    return conversions;
  };

  const calculate = (rate, emailCount) => {
    let conversionDecimal = rate / emailCount;
    let conversion = conversionDecimal * 100;
    return conversion;
  };

  useEffect(() => {
    if (num !== null && num !== undefined && num !== "") {
      let rts = [];

      for (let i = 0; i < rates.length; i++) {
        const convt = calculateConversion(rates[i], num);
        rts.push({ rate: rates[i], value: convt });
      }
      setData(rts);
    } else {
      setData([]);
    }

    return () => {};
  }, [num]);

  useEffect(() => {
    if (reply !== null && reply !== undefined && reply !== "") {
      const convt = calculate(reply, num);
      setRData({ rate: reply, value: convt });
    } else {
      setRData(null);
    }
  }, [reply, num]);

  return (
    <Fragment>
      <MCard
        title="COLD EMAIL CONVERSION CALCULATOR"
        hoverable
        bordered
        style={{ maxWidth: "550px", width: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="inputDiv">
          {/* <Typography.Title level={5} style={{ padding: 0, margin: 0 }}>
          Number of Cold Emails You’re Sending:
        </Typography.Title> */}
          <InputNumber
            addonBefore=" EMAILS"
            bordered
            style={{ width: "100%" }}
            placeholder="ENTER NUMBER OF EMAILS SENT..."
            value={num}
            onChange={(value) => setNum(value)}
          />
          <InputNumber
            addonBefore="REPLIES"
            bordered
            style={{ width: "100%" }}
            placeholder="ENTER NUMBER OF REPLIES..."
            value={reply}
            onChange={(value) => setReply(value)}
          />
        </div>
        <div className="examples">
          <Typography.Text>Ex:</Typography.Text>
          {examples?.map((doc, i) => {
            return (
              <Typography.Text
                style={{ fontWeight: "bold", cursor: "pointer" }}
                key={i}
                onClick={() => setNum(doc)}
                underline
              >
                {doc}
              </Typography.Text>
            );
          })}
        </div>
        {rData !== null &&
          rData !== undefined &&
          Object.keys(rData).length > 0 && <Replies doc={rData} />}
      </MCard>
      {data?.length > 0 && <RateHolder data={data} />}
    </Fragment>
  );
};

export default EmailCard;
