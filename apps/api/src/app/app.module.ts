import { Module } from '@nestjs/common';
import { JobsModule } from './modules/jobs/jobs.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { HealthModule } from './modules/health/health.module';
import { BillingModule } from './modules/billing/billing.module';
import { MetricsModule } from './modules/metrics/metrics.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AiModule } from './modules/ai/ai.module';
import { ResumesModule } from './modules/resumes/resumes.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [configuration],
    }),
    DatabaseModule,

    //  Features
    AuthModule,
    ProfilesModule,
    ResumesModule,
    JobsModule,
    AiModule,
    UploadsModule,
    NotificationsModule,
    BillingModule,
    HealthModule,
    MetricsModule,
  ],
})
export class AppModule {}
