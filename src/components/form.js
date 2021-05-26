const Form = ({ onChange }) => {
  return (
    <main className="form">
      <h2>Semantic form</h2>
      <h3>Please fullfill the form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted");
        }}
      >
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" onChange={onChange} />
          </label>
        </div>
      </form>
    </main>
  );
};

export default Form;
