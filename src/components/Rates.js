import { Progress, Typography } from "antd";

const Rates = (props) => {
  return (
    <div className="rates">
      <Typography.Text>
        With a {props.doc?.rate}% conversion rate, you will get{" "}
        {Math.round(props.doc?.value)} responses.
      </Typography.Text>
      <Progress percent={Math.round(props.doc?.rate)} />
    </div>
  );
};

export default Rates;
