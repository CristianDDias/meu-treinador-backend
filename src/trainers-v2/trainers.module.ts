import { Module } from '@nestjs/common';
import { applicationProviders } from './application/application.provider';
import { infrastructureProviders, modelsProviders } from './infrastructure/infrastructure.provider';
import { interfaceProviders } from './interface/interface.provider';

@Module({
  imports: [...modelsProviders],
  controllers: [...interfaceProviders],
  providers: [...applicationProviders, ...infrastructureProviders],
})
export class TrainersModuleV2 {}
