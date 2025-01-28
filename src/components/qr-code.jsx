import useGenerateQr from "@/hooks/generate-qr";
import PropTypes from "prop-types";

const QRCode = ({ size, string }) => {
  const { data: qr, isLoading, error } = useGenerateQr(string);

  return (
    <div>
      {isLoading ? "Loading QR code..." : null}
      {error ? <div>An error occurred: {error.message}</div> : null}
      {qr ? (
        <div
          style={{
            width: size,
            height: size,
          }}
          dangerouslySetInnerHTML={{ __html: qr }}
        />
      ) : null}
    </div>
  );
};

QRCode.propTypes = {
  size: PropTypes.string.isRequired,
  string: PropTypes.string.isRequired,
};

export default QRCode;
