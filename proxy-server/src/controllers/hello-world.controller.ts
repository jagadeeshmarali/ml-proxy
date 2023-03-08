import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller.interface';
import { credentials } from '@grpc/grpc-js';
import { UnaryClient } from '../../proto/unary_grpc_pb';
import { Message } from "../../proto/unary_pb";


class HelloWorldController implements Controller {
  public path = '/hello-world';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.helloWorld);
    this.router.get(`${this.path}/grpcHelloWorld`, this.grpcHelloWorld);
  }

  private helloWorld = async (request: Request, response: any): Promise<void> => {
    response.send("Hello World");

  }
  private grpcHelloWorld = async (request: Request, response: any): Promise<void> => {
    const client = new UnaryClient("app:50051", credentials.createInsecure());
    const grpc_request = new Message();
    grpc_request.setMessage("I am trying to write a blog on software engineering");
    client.getServerResponse(grpc_request, (err, resp) => {
      console.log(resp)
      response.send(resp.getMessage());
    });
  }

}

export default HelloWorldController;