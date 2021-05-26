const Form = ({ onChange, name }) => {
  return (
    <main className="form">
      <h2>Semantic form</h2>
      <h3>Please fullfill the form:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted");
        }}
      >
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={onChange}
              placeholder="Please type your name"
              value={name}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Age:
            <input type="number" name="age" placeholder="Type your age" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Gender:&nbsp;&nbsp;
            <label>
              Male:
              <input type="radio" name="gender" value="male" />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>
              Female:
              <input type="radio" name="gender" value="male" />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>
              Other:
              <input type="radio" name="gender" value="male" />
            </label>
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input type="text" name="city" placeholder="City where you live" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Native languajes:&nbsp;&nbsp;
            <select name="languaje">
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
              <option value="portuguese">Portuguese</option>
              <option value="french">French</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>Name:</label>
          <textarea name="phrase" placeholder="Type your favorite phrase" />
        </div>
      </form>
    </main>
  );
};

export default Form;
