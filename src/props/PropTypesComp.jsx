import PropTypes from 'prop-types';

function PropTypesComp({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
}

PropTypesComp.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export default PropTypesComp;
