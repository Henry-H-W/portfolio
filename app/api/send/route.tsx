// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function GET(req: Request) {
//   console.log("sadnjkshjda");

//   return NextResponse.json({message: "sdads"}, {status: 200});
// };

// export async function POST(req: Request) {
//   console.log("hit");
//   const { data, error } = await resend.emails.send({
//     from: 'Henry <henry-h.wang@hotmail.com>',
//     to: ['henry-h.wang@hotmail.com'],
//     subject: 'Hello world',
//     react: (
//         <>
//             <p>Email Body</p>
//         </>),
//   });

//   if (error) {
//     console.log(error);
//     return NextResponse.json(error, {status: 400});
//   }

//   return NextResponse.json(data, {status: 200});
// };