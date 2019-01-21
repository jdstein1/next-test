import css from 'styled-jsx/css';

export default () => {

    // Use css.global if you're importing this style into a <style jsx global /> tag
    return css`
        .clock {
            border:1px solid rgba(0,0,0,0.125);
            border-bottom-color:rgba(0,0,0,0.25);
            border-radius:0.5rem;
            padding:0.5rem;
            // background:rgb(202,255,227);
            // background:linear-gradient(0deg, rgba(186,186,186,0.5) 0%, rgba(227,227,227,0.5) 100%);
            background:rgb(51,51,51);
            background:linear-gradient(0deg, rgba(51,51,51,0.5) 0%, rgba(102,102,102,0.5) 100%);
            box-shadow:0 0.125rem 0.125rem 0 rgba(0,0,0,0.25);
        }
        .clock .card {
            margin:0.25rem;
            overflow: hidden;
            border:0;
            border-radius:0;
            border-radius:0.25rem;
            border-color:rgba(152,208,186,0.75);
            border-bottom-color:rgba(52,108,86,0.75);
            box-shadow:0 0.125rem 0.25rem 0.025rem rgba(0,0,0,0.75) inset;
        }
        .clock .card .card-body {
            padding:0;
        }
        .clock .card .card-title {
            overflow:hidden;
            padding:0.5rem 1.5rem;
            margin-bottom: 0;
            border:0;
            border-radius:0;
            // border-radius:0.4rem;
            // border-bottom-left-radius:0;
            // border-bottom-right-radius:0;
            background: linear-gradient(0deg, 
                rgba(202,255,227,0.5) 0%, 
                rgba(152,208,186,0.75) 75%);
        }
        .clock .card .card-text {
            overflow:hidden;
            font-size:4rem;
            padding:0.5rem 1.5rem;
            border:0;
            border-radius:0;
            // border-radius:0.4rem;
            // border-top-left-radius:0;
            // border-top-right-radius:0;
            box-shadow:
                0 0.5rem 2.5rem -0.5rem rgba(51,153,102,0.75) inset, 
                0 -0.5rem 3rem 1rem rgba(255,255,255,0.5) inset;
            text-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.25);
            background: rgb(202,255,227);
            background: linear-gradient(0deg, 
                rgba(202,255,227,0.5) 0%, 
                rgba(152,208,186,0.5) 100%);
        }
    `
};