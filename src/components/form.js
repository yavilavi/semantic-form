import "./form.css";
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
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Type your age"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <span>Gender</span>
          <label>
            Male:
            <input type="radio" name="gender" value="male" required />
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            Female:
            <input type="radio" name="gender" value="male" required />
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            Other:
            <input type="radio" name="gender" value="male" required />
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
          <label>
            Name:
            <textarea name="phrase" placeholder="Type your favorite phrase" />
          </label>
        </div>
        <div>
          <button type="submmit">Send</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
