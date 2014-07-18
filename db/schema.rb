# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ApplicantFieldValues", force: true do |t|
    t.string   "value"
    t.datetime "createdAt",   null: false
    t.datetime "updatedAt",   null: false
    t.integer  "ApplicantId"
    t.integer  "FieldId"
  end

  create_table "ApplicantNotes", force: true do |t|
    t.string   "text"
    t.datetime "createdAt",   null: false
    t.datetime "updatedAt",   null: false
    t.integer  "ApplicantId"
    t.integer  "UserId"
  end

  create_table "Applicants", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
    t.integer  "StageId"
    t.boolean  "deleted"
    t.integer  "CompanyId"
  end

  create_table "BackgroundCheckReports", force: true do |t|
    t.string   "eventId"
    t.string   "reportId"
    t.string   "candidateId"
    t.string   "sexOffenderSearchId"
    t.string   "nationalCriminalSearchId"
    t.string   "countyCriminalSearchIds",               array: true
    t.string   "motorVehicleReportId"
    t.string   "type"
    t.string   "uri"
    t.string   "status"
    t.string   "package"
    t.string   "source"
    t.datetime "createdAt",                null: false
    t.datetime "updatedAt",                null: false
    t.integer  "CompanyId"
  end

  create_table "Companies", force: true do |t|
    t.string   "name"
    t.string   "logoPath"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
  end

  create_table "EmailTemplates", force: true do |t|
    t.string   "name"
    t.string   "subject"
    t.string   "message"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
    t.integer  "CompanyId"
  end

  create_table "Emails", force: true do |t|
    t.string   "subject"
    t.string   "message"
    t.datetime "createdAt",   null: false
    t.datetime "updatedAt",   null: false
    t.integer  "ApplicantId"
    t.integer  "UserId"
  end

  create_table "EventSignups", force: true do |t|
    t.string   "start"
    t.string   "end"
    t.datetime "createdAt",   null: false
    t.datetime "updatedAt",   null: false
    t.integer  "ApplicantId"
    t.integer  "EventSlotId"
  end

  create_table "EventSlots", force: true do |t|
    t.string   "start"
    t.string   "end"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
    t.integer  "EventId"
  end

  create_table "Events", force: true do |t|
    t.string   "title"
    t.string   "start"
    t.string   "end"
    t.boolean  "allDay"
    t.datetime "createdAt",    null: false
    t.datetime "updatedAt",    null: false
    t.integer  "CompanyId"
    t.integer  "slotDuration"
    t.integer  "UserId"
  end

  create_table "Fields", force: true do |t|
    t.string   "name"
    t.boolean  "deleted"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
    t.integer  "CompanyId"
  end

  create_table "GoogleSpreadsheets", force: true do |t|
    t.string   "spreadsheetId"
    t.string   "googleRefreshToken"
    t.boolean  "shouldSync"
    t.datetime "createdAt",          null: false
    t.datetime "updatedAt",          null: false
    t.integer  "CompanyId"
    t.integer  "UserId"
  end

  create_table "InterestedContacts", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "message"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
  end

  create_table "Leads", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.integer  "age"
    t.string   "city"
    t.boolean  "hasCar"
    t.boolean  "hasGoodCar"
    t.boolean  "insuredToDrive"
    t.boolean  "oneYearLicense"
    t.boolean  "rentOwnCar"
    t.boolean  "leaseCar"
    t.boolean  "hasiPhone"
    t.boolean  "hasAndroid"
    t.boolean  "hasBike"
    t.boolean  "hasScooter"
    t.boolean  "canHouse"
    t.boolean  "canHavePets"
    t.boolean  "hasComputer"
    t.boolean  "canClean"
    t.boolean  "isHandyman"
    t.boolean  "canCook"
    t.boolean  "canGiveTours"
    t.boolean  "hasParking"
    t.boolean  "hasTextbooks"
    t.boolean  "hasTools"
    t.datetime "createdAt",      null: false
    t.datetime "updatedAt",      null: false
  end

  create_table "SequelizeMeta", force: true do |t|
    t.string "from"
    t.string "to"
  end

  create_table "Stages", force: true do |t|
    t.string   "name"
    t.boolean  "deleted"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
    t.integer  "CompanyId"
  end

  create_table "TriggerConditions", force: true do |t|
    t.integer  "FieldId"
    t.string   "func"
    t.string   "value"
    t.datetime "createdAt", null: false
    t.datetime "updatedAt", null: false
    t.integer  "TriggerId"
  end

  create_table "Triggers", force: true do |t|
    t.string   "action"
    t.integer  "fromStageId"
    t.integer  "toStageId"
    t.datetime "createdAt",   null: false
    t.datetime "updatedAt",   null: false
    t.integer  "CompanyId"
  end

  create_table "Users", force: true do |t|
    t.string   "email"
    t.string   "password"
    t.boolean  "passwordChanged"
    t.string   "googleRefreshToken"
    t.string   "googleEmail"
    t.string   "googleCalendarId"
    t.datetime "createdAt",                          null: false
    t.datetime "updatedAt",                          null: false
    t.integer  "CompanyId"
    t.string   "name"
    t.boolean  "isAdmin",            default: false
    t.boolean  "isSuperAdmin",       default: false
  end

end
