import 'source-map-support/register';
import sinon from 'sinon';
import chai, {expect} from 'chai';
import scio from '../src/sinon-chai-in-order';
import sc from 'sinon-chai';
chai.use(scio);
chai.use(sc);

describe('.inOrder', function() {
    it('Asserts the order of calls', function() {
        const spy = sinon.spy();
        [1, 2, 3].forEach(spy);

        expect(() => {
            expect(spy).inOrder.to.have.been.calledWith(1).then.calledWith(2).then.calledWith(3);
        }).not.to.throw();
    });

    it('fails when asserted object is not a spy', function() {
        expect(() => {
            expect("foo").inOrder;
        }).to.throw(`'foo' is not a spy!`);

    });
});

describe('.then', function() {
    it('does nothing if asserted object is not a spy call', function() {
        const obj = "obj";
        expect(expect(obj).then).to.have.property("_obj").that.equals(obj);
    });

    it('fails if no spy call was found', function() {
        const spy = sinon.spy();
        spy(1);

        expect(() => {
            expect(spy).inOrder.to.have.been.calledWith(1).then.calledWith(2);
        }).to.throw("spy was only called 1 time(s)");
    });
});