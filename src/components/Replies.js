import { Progress, Typography } from "antd";

const Replies = (props) => {
  return (
    <div className="replies">
      <Typography.Text>
        With {props.doc?.rate} responses, you will get conversion rate of
        {" "}{Math.round(props.doc?.value)}%.
      </Typography.Text>
      <Progress percent={Math.round(props.doc?.value)} />
    </div>
  );
};

export default Replies;
