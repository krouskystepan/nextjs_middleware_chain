import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";

export  function withMiddleware1(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
      const response = NextResponse.next()

      const url = request.url;
      console.log('middleware1 => ', { url });
  
      return middleware(request, event, response);
    };
  }