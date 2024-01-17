const PaymentSuccess = () => {
  //tu se salje request na robijev endpoint kad ga napravi da se unese order u bazu
  return (
    <div className="flex items-center justify-center h-screen bg-white-light">
      <h1 className="text-gray-dark font-bold text-6xl text-center">
        Uspješno ste izvršili plaćanje!
      </h1>
    </div>
  );
};

export default PaymentSuccess;
